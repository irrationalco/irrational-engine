import React, { Component } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


import { NavigationScreenProps } from 'react-navigation';

import {
    getLocalSurvey,
    getLocalSurveyList,
    getSurveyList,
    saveLocalSurveyList,
} from '../Store';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import SurveyCard from '../components/SurveyCard';
import { colors } from '../Styles';

interface ISurveyListState {
    surveys: engine.SurveyListing[];
    error: ErrorStates;
    loading: boolean;
    refreshing: boolean;
}

enum ErrorStates {
    none,
    genericError
}

const ErrorMessages = new Map([
    [ErrorStates.genericError, 'Ha ocurrido un error por favor vuelva a intentar más tarde']
]);

export default class SurveyList extends Component<NavigationScreenProps<{}>, ISurveyListState> {

    static navigationOptions = {
        headerRight:
            <TouchableOpacity onPress={() => {}} style={{margin:10}}>
                <FontAwesome style={ {fontSize:28, color: colors.purple} }>{Icons.cloudUpload}</FontAwesome>
            </TouchableOpacity>,
        title: 'Encuestas',
    };

    localList: engine.SurveyListing[];

    constructor(props: any) {
        super(props);
        this.state = {
            error: ErrorStates.none,
            loading: false,
            refreshing: false,
            surveys: [],
        };
    }

    // tslint:disable-next-line:space-before-function-paren
    refresh = async () => {
        this.setState({ refreshing: true });
        try {
            await this.renderSurv();
        } catch (e) {
            throw Error(`_onRefresh: ${e.message}`);
        }
        this.setState({ refreshing: false });
    }

    // tslint:disable-next-line:space-before-function-paren
    navigateToSurvey = async (id: number) => {
        const survey: engine.Survey = await getLocalSurvey(id);
        this.props.navigation.navigate('SurveyDisplay', { survey });
    }


    async renderSurv() {
        try {
            this.setState({ loading: true });

            const promise = getSurveyList();

            this.localList = (await getLocalSurveyList()) || [];

            const internetList = await promise;

            const renderSurvey = [];
            const map = new Map(this.localList.map((item): [number, number] => [item.id, item.lastUpdate.getTime()]));
            for (const survey of internetList) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (survey.lastUpdate.getTime() === map.get(survey.id)) {
                    survey.status = engine.SurveyStatus.upToDate;
                } else {
                    survey.status = map.get(survey.id) === undefined ? engine.SurveyStatus.notDownloaded : engine.SurveyStatus.updateNeeded;
                }
                renderSurvey.push(survey);
            }

            this.setState({ surveys: renderSurvey });

            this.setState({ loading: false });
        } catch (e) {
            throw Error(`renderSurv: ${e.message}`);
        }
    }

    componentWillMount() {
        this.renderSurv();
    }

    // tslint:disable-next-line:space-before-function-paren
    onItemUpdate = async (id: number) => {
        try {
            const idx = this.localList.findIndex((item) => item.id === id);
            const nIdx = this.state.surveys.findIndex((item) => item.id === id);
            if (idx === -1) {
                this.localList.push(this.state.surveys[nIdx]);
            } else {
                this.localList[idx] = this.state.surveys[nIdx];
            }
            await saveLocalSurveyList(this.localList);
        } catch (e) {
            throw Error(`onItemUpdate: ${e.message}`);
        }
    }

    render() {
        let content: JSX.Element;
        if (this.state.surveys.length > 0) {
            content = <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.refresh}
                    />
                }
            >
                <View style={styles.cards}>
                    {this.state.surveys.map((survey) => {
                        return <SurveyCard key={survey.id} data={survey}
                            onStatusUpdate={this.onItemUpdate} navigate={this.navigateToSurvey} />;
                    })}
                </View>
            </ScrollView>;
        } else {
            content = <View style={styles.empty}>
                <Text>No tienes encuestas</Text>
            </View>;
        }
        return (
            <View style={styles.container}>
                {content}
                {this.state.loading &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size='large' color={colors.purple} animating={true} />
                    </View>}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF88',
        bottom: 0,
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    cards: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingVertical: 10
    },
    empty: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    up:{
        color: colors.blue,
        fontSize: 28
    },
});

