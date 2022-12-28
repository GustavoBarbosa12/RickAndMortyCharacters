import { useState } from 'react';
import { CharactersFilterEntity } from '../../../domain/entities/characters-filter-entity';
import { useCharactersContext } from '../../context/characters-context';
import { CharactersActions } from '../../context/types/characters-context-types';
import { GenderOptions, StatusOptions } from '../../types/characters-filter-types';
import * as C from './characters-list-filter-styles';

export const CharactersListFilter = () => {
    const { state, dispatch } = useCharactersContext();
    const [ filter, setFilter] = useState<CharactersFilterEntity| any>({...state.charactersFilter});

    const handleSetFilter = (value: string, key: string) =>{
        let newFilter = {...filter};

        switch (key) {
            case "name":
                newFilter.name = value;
                break;
            case "specie":
                newFilter.specie = value;
                break;
            case "gender":
                newFilter.gender = value;
                break;
            case "status":
                newFilter.status = value;
                break;
        }
        
        setFilter(newFilter);
    }

    const handleApply = () => {
        dispatch({
            type: CharactersActions.setCharactersFilter,
            payload: filter
        });

        dispatch({
            type: CharactersActions.setCharactersListPage,
            payload: 1
        });
    }

    return(
        <C.Container>
            <h4>Filters</h4>
            <C.FormContainer>
                <C.LabelInput>
                    Name:
                    <C.TextInput 
                        type="text"
                        value={filter.name}
                        onChange={e => handleSetFilter(e.target.value, 'name')}
                    />
                </C.LabelInput>

                <C.LabelInput>
                    Specie:
                    <C.TextInput 
                        type="text"
                        value={filter.specie}
                        onChange={e => handleSetFilter(e.target.value, 'specie')}
                    />
                </C.LabelInput>

                <C.LabelInput>
                    Gender:
                    <C.SelectInput value={filter.gender} onChange={e => handleSetFilter(e.target.value, 'gender')}>
                        <option></option>
                        {GenderOptions.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </C.SelectInput>
                </C.LabelInput>

                <C.LabelInput>
                    Status:
                    <C.SelectInput value={filter.status} onChange={e =>  handleSetFilter(e.target.value, 'status')}>
                        <option></option>
                        {StatusOptions.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </C.SelectInput>
                </C.LabelInput>

                <C.ApplyButton onClick={handleApply}>Apply</C.ApplyButton>
            </C.FormContainer>
        </C.Container>
    )
}