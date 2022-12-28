import { CharactersFilterEntity } from "../../domain/entities/characters-filter-entity";
import { CharactersListEntity } from "../../domain/entities/characters-list-entity";

export default interface  GetCharactersDatasource {
    getCharacters(charactersFilter: CharactersFilterEntity): Promise<CharactersListEntity>
}