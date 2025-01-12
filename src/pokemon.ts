import { pokemon_list } from './pokemon_list.js';

interface Pokemon {
    code: number;
    name: string;
    weight: number;
    color: string;
    ability2: string;
    hp: number;
    sp_def: number;
    number: number;
    spd: number;
    height: number;
    atk: number;
    generation: number;
    mega_evolution: boolean;
    sp_atk: number;
    legendary: boolean;
    hidden_ability: string;
    serial: number;
    total: number;
    type: any;
    def: number;
    ability1: string;
}

function QuestionOne() {
    const legendaries: Pokemon[] = [];
    for (let p of pokemon_list) {
        let pokemon: Pokemon;
        pokemon = p;
        if (pokemon.legendary){
            legendaries.push(pokemon);
        }
    }

    console.log(`\n1. There are ${legendaries.length} legendary Pokemon:`);

    const legendaryNames: string[] = [];
    for (let p of legendaries) {
        legendaryNames.push(p.name);
    }
    console.log(legendaryNames);

}

function QuestionTwo() {
    console.log(`\n2. These are the Pokemon with the highest defense stat:`);
    pokemon_list.sort(function(pokemonA, pokemonB) {
        return pokemonB.def - pokemonA.def;
    });
    for (let p of pokemon_list.slice(0, 3)) {
        console.log({name: p.name, def: p.def});
    }
    
}

function QuestionThree() {
    const overweightPokemon: Pokemon[] = [];
    for (let p of pokemon_list) {
        let pokemon: Pokemon;
        pokemon = p;
        if (pokemon.weight > pokemon.height * 60) {
            overweightPokemon.push(pokemon);
        }
    }

    console.log(`\n3. There are ${overweightPokemon.length} overweight Pokemon and their names are:`);

    const overweightList: string[] = [];
    for (let p of overweightPokemon) {
        overweightList.push(p.name);
    }
    console.log(overweightList);
}


function QuestionFour() {
    function Occurence(array: number[], value: any) {
        var count = 0;
        array.forEach( v => v === value && count++);
        return count;
    }

    const pokeNumber: number[] = [];
    for (let p of pokemon_list) {
        pokeNumber.push(p.number);
    }

    const variedPokemon: any[] = [];
    let pokeNum = [];

    for (let p of pokemon_list) {
        let frequency: number = Occurence(pokeNumber, p.number);
        if (frequency > 1) {
            pokeNum.push(p.number);
            variedPokemon.push({
                number: p.number,
                name: p.name,
                ability: [p.ability1, p.ability2],
                hidden_ability: p.hidden_ability,
            });
        }
    }

    let newPokemonNum = [... new Set(pokeNum)];

    console.log(
        `\n4. ${newPokemonNum.length} Pokemon have two or more variations and there are ${pokeNum.length} Pokemon if the variants are included:`
    );

    let pokemonNames: string[] = [];
    for (let n of newPokemonNum){
        for (let p of pokemon_list) {
            if (n == p.number) {
                pokemonNames.push(p.name);
            }
        }
    }
    console.log(pokemonNames);
}

function QuestionFive() {
    console.log(
        `\n5. Here are the list of Pokemon types and the amount of Pokemon having that type from the the most common to the least:`
      );

    const pokemonTypes: string[] = [];

    for (let p of pokemon_list) {
        let pokemon: Pokemon;
        pokemon = p;
        if (typeof pokemon.type === "string") {
            pokemonTypes.push(pokemon.type);
        } else {
            for (let t of pokemon.type) {
                pokemonTypes.push(t);
            }
        }
    }

    function Occurence(array: string[], value: any) {
        var count = 0;
        array.forEach( v => v === value && count ++);
        return count;
    }

    let pokemonTypesNoDuplicates: string[] = [...new Set(pokemonTypes)];
    let pokemonTypesNoDuplicatePlus = [];

    for (let t of pokemonTypesNoDuplicates) {
        let frequency: number = Occurence(pokemonTypes, t);
        pokemonTypesNoDuplicatePlus.push({type: t, frequency: frequency});
    }

    pokemonTypesNoDuplicatePlus.sort(function(pokemonA, pokemonB) {
        return pokemonB.frequency - pokemonA.frequency;
    });

    for (let t of pokemonTypesNoDuplicatePlus) {
        console.log(t);
    }
}

QuestionOne();
QuestionTwo();
QuestionThree();
QuestionFour();
QuestionFive();