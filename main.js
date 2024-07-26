const caixaprincipal = document.querySelector( ".caixa-principal")
const caixaPerguntas = document.querySelector( ".caixa-perguntas")
const caixaAlternativas = document.querySelector( ".caixa-alternativas")
const caixaResultado = document.querySelector( ".caixa-resultado")
const textoResultado = document.querySelector( ".texto-resultado")


const perguntas = [

    {
        enunciado: "você gosta de bolo?",
        alternativas: [
            {
                texto:"sim",
                afirmacao:"você é uma pessoa normal"
            },
            {
                texto:"não",
                afirmacao:"você é chato pra caramba"
            }
        ]
    },
    {
        enunciado: "você dorme?",
        alternativas: [
            {
                texto:"sim",
                afirmacao:"você é uma pessoa normal"
            },
            {
                texto:"não",
                afirmacao:"você é diferentão."
            }
        ]
    }
    
]








function mostrapergunta(){

}