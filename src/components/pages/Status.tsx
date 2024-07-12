import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../Header";
import { Separator } from "../Separator";
import { Tweet } from "../Tweet";

import './Status.css'
import { PaperPlaneRight } from "phosphor-react";

/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
    const [NewAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'olha, faz sentido!',
        'Parabéns pelo progresso'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()

        setAnswers([NewAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([NewAnswer, ...answers])
            setNewAnswer('')
        }
    }




    return (
        <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna vitae velit condimentum consectetur. Duis vehicula, tortor nec facilisis viverra, nulla nisl ultricies odio, in interdum massa magna et purus. Proin tristique enim nec erat efficitur, non hendrerit ipsum dictum. Nam at turpis vel nulla varius pretium. Ut varius lacinia nisi, a fermentum nulla vestibulum vel. Integer vel bibendum tortor. Curabitur cursus urna non nulla sollicitudin, " />

            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/ramoncodevale.png" alt="Ramon Valentim" />
                    <textarea
                        id='tweet'
                        placeholder='Tweet your answer'
                        value={NewAnswer}
                        onKeyDown={handleHotkeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>

                <button type='submit'>
                <PaperPlaneRight />
                 <span>Answer</span>
                </button>
            </form>



            {answers.map((answer) => (
                <Tweet key={answer} content={answer} />
            ))}



        </main>
    )
}