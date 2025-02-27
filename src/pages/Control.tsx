import { useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";
import { StoreState } from "../redux";
import { ControlCards, ControlDiv } from "./Control.style";

export function Control() {
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('table');  

  
    const listadePratos = useSelector(
    (state: StoreState) => state.store)

    let totalPrice = useSelector(
      (state: StoreState) => state.store.map((item) => item.order.filter((itens,total) => total += (itens.amount * itens.price)))
      )

  return(
    <>
    {listadePratos.map((pratos) => {return (
      pratos.order.map((order, total) => {return (
    <ControlHeader text="Enviar pedido para cozinha" name="Comanda" show={true} idProduct={1} price={total = total + (order.price * order.amount)} tableId={id}/>
      )})
    )})}
    <ControlDiv>
      <ControlCards>
      {listadePratos.map((prato) => { 
        return (
          prato.order.map((orderItem, index) => {
            return (
              <Card key={index} idProduct={orderItem.idProduct} name={orderItem.name} price={orderItem.price} image={orderItem.image} description={orderItem.comment} counter />
              )
            })
            )
          })}
        </ControlCards>
      </ControlDiv>
    <MenuBottom />
    </>
  )
}