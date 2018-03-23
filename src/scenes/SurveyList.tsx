import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {
    getLocalSurveyList,
    getSurveyList,
} from '../Store';

import Logo from '../components/Logo';
import SurveyCard from '../components/SurveyCard';
import { colors } from '../Styles';

// const platformBehavior = Platform.OS === 'ios' ? { behavior: 'padding' as 'padding' } : {};

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
    [ErrorStates.genericError, 'Ha ocurrido un error aor favor vuelva a intentar más tarde']
]);

export default class SurveyList extends Component<{}, ISurveyListState> {

    static navigationOptions = {
        title: 'SurveyList',
    };

    constructor(props: any) {
        super(props);
        this.state = {
            error: ErrorStates.none,
            loading: false,
            refreshing: false,
            surveys:[],
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.renderSurv().then(() => {
          this.setState({refreshing: false});
        // tslint:disable-next-line:no-console
        }).catch((e) => console.error(e));
    }


    async renderSurv() {
        try{
            this.setState({loading: true});

            // tslint:disable-next-line:no-console
            const promise = getSurveyList();

            // tslint:disable-next-line:no-console
            const localList = (await getLocalSurveyList()) || [];

            const internetList = await promise as engine.SurveyListing[];

            const map = new Object();
            const renderSurvey = [];

            for (const survey of localList) {
                map[survey.id] = survey.lastUpdate;
            }

            for (const survey of internetList) {
                if(survey.lastUpdate !== map[survey.id]){
                    survey.status = map[survey.id] === undefined ? engine.SurveyStatus.notDownloaded : engine.SurveyStatus.updateNeeded;
                }else{
                    survey.status = engine.SurveyStatus.upToDate;
                }
                renderSurvey.push(survey);
            }

            this.setState({surveys: renderSurvey});

            this.setState({loading: false});
        }catch{
            // tslint:disable-next-line:no-console
            (e) => console.warn(e);
        }
    }

    async componentWillMount(){
        this.renderSurv();
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo style={styles.logo} />
                <ScrollView
                    refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                    } style={styles.otherContent}
                >
                    <View style={styles.cards}>
                        {this.state.surveys.map((survey) => <SurveyCard key={survey.id} {...survey} />)}
                    </View>
                </ScrollView>
                {this.state.loading &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size='large' color={colors.purple} animating={true} />
                    </View>}
            </View>
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
    cards:{
        flex:1,
        // justifyContent: 'space-between',
    },
    container:{
        flex:1,
    },
    logo: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    otherContent: {
        flex: 3,
        marginTop: 25
    },
});

