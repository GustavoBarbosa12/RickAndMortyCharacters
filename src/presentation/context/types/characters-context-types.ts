import { CharactersFilterEntity } from "../../../domain/entities/characters-filter-entity";
import { CharactersListEntity } from "../../../domain/entities/characters-list-entity";

export type CharactersContextState = {
    charactersList: CharactersListEntity;
    charactersFilter: CharactersFilterEntity;
    charactersListPage: number;
}

export enum CharactersActions {
    setCharactersList,
    setCharactersFilter,
    setCharactersListPage
}

export type CharactersContextAction = {
    type: CharactersActions;
    payload: any;
}

export type CharactersContextType = {
    state: CharactersContextState;
    dispatch: (action: CharactersContextAction) => void;
}