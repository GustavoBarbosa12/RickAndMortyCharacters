import { CharactersFilterEntity } from "../../../../domain/entities/characters-filter-entity";
import { CharactersFilterEntityRemote } from "../../../entities/remote/request-enetities/characters-filter-entity-remote";

export const GetCharactersRequestMapper = (charactersFilter: CharactersFilterEntity) => {
    let mappedCharactersFilter: CharactersFilterEntityRemote ={
        name: charactersFilter.name,
        status: charactersFilter.status,
        type: charactersFilter.type,
        species: charactersFilter.specie,
        gender: charactersFilter.gender,
        page: charactersFilter.page
    };
    
    return mappedCharactersFilter;
}