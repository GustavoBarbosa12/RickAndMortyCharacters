import { CharactersFilterEntity } from "../../domain/entities/characters-filter-entity";
import { CharactersListEntity } from "../../domain/entities/characters-list-entity";
import GetCharactersDatasource from "../datasources/get-characters-datasource";

export default class GetCharactersAbstractRepositoryImpl implements GetCharactersAbstractRepositoryImpl {
    getCharactersDataSource: GetCharactersDatasource;

    constructor(_getCharactersDataSource: GetCharactersDatasource){
        this.getCharactersDataSource = _getCharactersDataSource;
    }

    getCharacters(charactersFilter: CharactersFilterEntity): Promise<CharactersListEntity> {
        
        return this.getCharactersDataSource.getCharacters(charactersFilter);
    }
}