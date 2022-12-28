import { createContext, ReactNode, useContext, useReducer } from "react";
import { CharactersActions, CharactersContextAction, CharactersContextState, CharactersContextType } from "./types/characters-context-types";

const initialData: CharactersContextState = {
    charactersList: {
        info: {
            pages: 0,
        },
        results: []
    },
    charactersFilter: {
        name: '',
        status: '',
        type: '',
        specie: '',
        gender: ''
    },
    charactersListPage: 1
}

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

const charactresReducer = (state: CharactersContextState, action: CharactersContextAction) => {
    switch(action.type) {
        case CharactersActions.setCharactersList:
            return {...state, charactersList: action.payload};
        case CharactersActions.setCharactersFilter:
            return {...state, charactersFilter: action.payload};
        case CharactersActions.setCharactersListPage:
            return {...state, charactersListPage: action.payload};
    }
}

type Props = {
    children: ReactNode;
}

export const CharactersProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(charactresReducer, initialData);
    const value = { state, dispatch };

    return (
        <CharactersContext.Provider value={value}>
            {children}
        </CharactersContext.Provider>
    )
}

export const useCharactersContext = () => {
    const context = useContext(CharactersContext);

    if(context === undefined) {
        throw new Error('');
    }

    return context;
}