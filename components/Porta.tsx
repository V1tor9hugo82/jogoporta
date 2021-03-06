import styles from "../styles/Porta.module.css"
import Presente from './Presente'
import PortaModel from '../model/porta'

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void

}

export default function Porta(props: PortaProps) {
  const Porta = props.value
  const selecionada = Porta.selecionada && !Porta.aberta ? styles.selecionada : ''

  const alternarSelecao = e => props.onChange(Porta.alternarSelecao())
  const abrir = e => {
    e.stopPropagation()
    props.onChange(Porta.abrir())
  }

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{Porta.numero}</div>
        <div className={styles.macaneta}
          onClick={abrir} ></div>
      </div>

    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {Porta.fechada ?
          renderizarPorta() :
          Porta.temPresente ? <Presente /> : false
        }
      </div>
      <div className={styles.chao}></div>
    </div>

  )
}

