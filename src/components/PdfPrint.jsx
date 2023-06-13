import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const PdfPrint = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
    })
    return (
        <>
            <div ref={componentRef} style={{ width: '100%' }}>
                <div style={{ textAlign: 'justify' }}>
                    <h1 style={{ margin: '20px 10px' }}>Todo meu amor é pouco!</h1>
                    <p style={{ margin: '20px 10px' }}>
                        Meu amor, minha vida, razão do meu viver. Sempre tive muita dificuldade de me espressar mas por algum motivo sinto que você merece isso, até porque você merece o mundo e mais um pouquinho!
                        Todo meu amor é pouco para retribuir todo o amor que você merece, voce é o melhor presente que eu podia ter, pequeno e completo e com sua chatice que completa seu charme.
                    </p>
                    <p style={{ margin: '20px 10px' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nulla voluptates voluptatum natus reprehenderit vel autem, sed quia temporibus numquam dolorem expedita distinctio voluptate quo laborum, quisquam libero sint reiciendis.
                    </p>
                </div>
            </div>
            <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'center' }}>
                <button onClick={handlePrint}>Guardar de recordação!</button>
            </div>
        </>

    )
}

export default PdfPrint