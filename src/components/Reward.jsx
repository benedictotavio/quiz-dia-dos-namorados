import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import './Reward.css'

import { BsFileEarmarkPdf } from 'react-icons/bs'

const Reward = () => {

  const printLetter = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitlePdf = [{
      text: 'Todo meu amor é pouco...',
      fontSize: 16,
      bold: true,
      margin: [15, 0, 25, 0]
    }]
    const footerPdf = []
    const detailsPdf = [
      {
        text: 'Todo meu amor é pouco...',
        fontSize: 10,
        bold: true,
        margin: [5, 0, 7.5, 0]
      }
    ]

    const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15,50,15,40],
      header: reportTitlePdf,
      footer: footerPdf,
      content:detailsPdf
    }

    pdfMake.createPdf(docDefinitions).download()

    console.log('Imprimir a carta!');
  }

  return (
      <div id='print_letter_section'>
        <button onClick={printLetter}>
          Imprimir Carta <i>
            <BsFileEarmarkPdf />
          </i>
        </button>
      </div>
  )
}

export default Reward