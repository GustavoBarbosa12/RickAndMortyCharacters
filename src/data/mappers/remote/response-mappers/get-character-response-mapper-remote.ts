import { CharactersListEntity } from "../../../../domain/entities/characters-list-entity";
import { GetCharactersEntityRemote } from "../../../entities/remote/response-entities/get-characters-entity-remote";

export const GetCharactersResponseMapper = async (response: GetCharactersEntityRemote) => {
    let mappedResponse: CharactersListEntity = {
        info:{
            pages: 0
        },
        results:[]
    };
    
    mappedResponse.info.pages = response.info.pages;
    await response.results.map((item) => {
        mappedResponse.results.push({
            id: item.id,
            name: item.name,
            status: item.status,
            specie: item.species,
            gender: item.gender,
            location: item.location.name,
            origin: item.origin.name,
            img: item.image
        })
        
        return item;
    });

    return mappedResponse;
}