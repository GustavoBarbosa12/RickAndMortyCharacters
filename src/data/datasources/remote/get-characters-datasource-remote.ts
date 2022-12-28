import AxiosHttpService from "../../../infra/services/axios-http-service";
import { RMApiEndpoints } from "../../../infra/api/rick-and-morty-api/rick-and-morty-api-endpoints";
import { GetCharactersResponseMapper } from "../../mappers/remote/response-mappers/get-character-response-mapper-remote";
import { GetCharactersEntityRemote } from "../../entities/remote/response-entities/get-characters-entity-remote";
import GetCharactersDatasource from "../get-characters-datasource";
import { CharactersFilterEntity } from "../../../domain/entities/characters-filter-entity";
import { GetCharactersRequestMapper } from "../../mappers/remote/request-mappers/get-character-request-mapper-remote";
import { CharactersListEntity } from "../../../domain/entities/characters-list-entity";

export default class GetCharactersDatasourceRemote implements GetCharactersDatasource {
    async getCharacters(charactersFilter: CharactersFilterEntity): Promise<CharactersListEntity> {
        let charactersFilterRemote = GetCharactersRequestMapper(charactersFilter);
        try {
            let response = await AxiosHttpService.get<GetCharactersEntityRemote>(RMApiEndpoints.GETCHARACTERS, { params: charactersFilterRemote});
            let data  = await GetCharactersResponseMapper(response.data);
    
            return data;
        } catch (error) {
            let data: CharactersListEntity = {
                info: {
                    pages:0
                },
                results: []
            }
            return data;
        }

    }
}