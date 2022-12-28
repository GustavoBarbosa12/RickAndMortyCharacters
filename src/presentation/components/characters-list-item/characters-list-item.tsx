import * as C from './characters-list-item-styles';
import { CharacterEntity } from '../../../domain/entities/character-entity';

export const CharactersListItem = ({ 
    name, 
    status, 
    specie, 
    gender, 
    origin, 
    location,
    img
}: CharacterEntity) => {
    return (
        <C.Container>
            <C.Profile>
                <img src={img} alt="img" width={120}/>
            </C.Profile>

            <C.DescriptionsContainer>
                <C.Name>{name}</C.Name>
                <C.Descriptions><b>Status:</b> {status}</C.Descriptions>
                <C.Descriptions><b>Specie:</b> {specie}</C.Descriptions>
                <C.Descriptions><b>Gender:</b> {gender} </C.Descriptions>
                <C.Descriptions><b>Origin:</b> {origin} </C.Descriptions>
                <C.Descriptions><b>Location:</b> {location} </C.Descriptions>
            </C.DescriptionsContainer>
        </C.Container>
    )
}