import React, { Component } from 'react';
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import {
    getLocalSurvey,
    getSurveyById,
    saveLocalSurvey,
} from '../Store';

import Button from './Button';

import { colors } from '../Styles';

interface ISurveyCardState {
    data: engine.SurveyListing;
    downloading: boolean;
    error: ErrorStates;
}

interface ISurveyCardProps {
    data: engine.SurveyListing;
    onStatusUpdate: (id: number) => void;
}

enum ErrorStates {
    none,
    genericError
}

export default class SurveyCard extends Component<ISurveyCardProps, ISurveyCardState> {

    constructor(props: ISurveyCardProps) {
        super(props);
        this.state = {
            data: props.data,
            downloading: false,
            error: ErrorStates.none
        };
    }

    // tslint:disable-next-line:space-before-function-paren
    downloadSurvey = async () => {
        this.setState({ downloading: true });
        try {
            const newSurvey = await getSurveyById(this.state.data.id);
            await saveLocalSurvey(newSurvey);
            this.setState({ data: { ...this.state.data, status: engine.SurveyStatus.upToDate } });
            this.props.onStatusUpdate(newSurvey.id);
        } catch (e) {
            this.setState({ error: ErrorStates.genericError });
        }
        this.setState({ downloading: false });
    }

    render() {
        let status: JSX.Element;
        if (this.state.downloading) {
            status = <ActivityIndicator size='large' color={colors.purple} animating={true} />;
        } else {
            switch (this.state.data.status) {
                case engine.SurveyStatus.upToDate:
                    status = <FontAwesome style={styles.check}>{Icons.check}</FontAwesome>;
                    break;
                case engine.SurveyStatus.updateNeeded:
                    status = <Button onClick={this.downloadSurvey}>Actualizar</Button>;
                    break;
                case engine.SurveyStatus.notDownloaded:
                    status = <Button onClick={this.downloadSurvey}>Descargar</Button>;
                    break;
            }
        }
        return (
            <View style={styles.cardStyle}>
                <View style={styles.leftSide}>
                    <Text style={styles.title}>{this.state.data.name}</Text>
                    <Text>Preguntas: {this.state.data.numberOfQuestions}</Text>
                </View>
                <View style={styles.rightSide}>
                    {status}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        margin: 7,
        padding: 10,


        elevation: 2,

        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4,
    },
    check: {
        color: colors.purple,
        fontSize: 28
    },
    leftSide: {
        flex: 2,
    },
    rightSide: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

