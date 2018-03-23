import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    getLocalSurvey,
    getSurveyById,
    saveLocalSurvey,
} from '../Store';

import Button from './Button';

import { colors } from '../Styles';

interface ISurveyCardState {
    downloading: boolean;
    error: ErrorStates;
}

enum ErrorStates {
    none,
    genericError
}

export default class SurveyCard extends Component<engine.SurveyListing, ISurveyCardState> {

    constructor(props: any){
        super(props);
        this.state = {
            downloading: false,
            error: ErrorStates.none,
        };
    }

    updateSurvey = async() => {
        this.setState({downloading: true});
        try{
            // tslint:disable-next-line:no-console
            console.warn('first');
            const promise = getSurveyById(this.props.id);
            const newSurvey = await promise;
            // saveLocalSurvey(newSurvey);
        } catch (e) {
            this.setState({error: ErrorStates.genericError});
            // tslint:disable-next-line:no-console
            console.warn('second');
        }
        this.setState({ downloading: false});

    }

    downloadSurvey = async() => {
        this.setState({downloading: true});
        try{
            const newSurvey = await getSurveyById(this.props.id);
            await saveLocalSurvey(newSurvey);
        } catch (e) {
            this.setState({error: ErrorStates.genericError});
            // tslint:disable-next-line:no-console
            console.warn(e);
        }
        // const test = await getLocalSurvey(4).catch((e) => console.error(e));
        // console.warn("Test");
        // console.warn(JSON.stringify(test));

        // NEED TO SAVE LOCALSURVEYLIST TOO
        this.setState({ downloading: false});
    }

    render() {
        return (
            <View style={styles.cardStyle}>
                <View style={styles.leftSide}>
                    <Text>id: {this.props.id}</Text>
                    <Text>lastUpdate: {this.props.lastUpdate.toDateString()}</Text>
                    <Text>name: {this.props.name}</Text>
                    <Text>numberOfQuestions: {this.props.numberOfQuestions}</Text>
                    <Text>sizeEstimate: {this.props.sizeEstimate}</Text>
                    <Text>status: {this.props.status}</Text>
                </View>
                <View style={styles.rightSide}>
                    {this.props.status === engine.SurveyStatus.notDownloaded &&
                        <Button onClick={this.downloadSurvey}>Descargar</Button>}
                    {this.props.status === engine.SurveyStatus.updateNeeded &&
                        <Button onClick={this.updateSurvey}>Actualizar</Button>}
                    {this.props.status === engine.SurveyStatus.upToDate &&
                        // tslint:disable-next-line:no-require-imports
                        < Image style={styles.check} source={require('../../img/downloaded.png')}/>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        borderColor: colors.darkerGray,
        borderRadius: 11,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
    },
    check: {
        flex: 1,
        height: 50,
        resizeMode: 'contain',
        width: 50,
    },
    leftSide: {
        flex: 2,
    },
    rightSide: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

