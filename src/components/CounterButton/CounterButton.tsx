import { useState } from "react";
import { CounterStyle } from "./Counter.style";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { remove } from "../../redux/storeSlice";


type CounterProps = {
  name?: string;
  price?:number;
}

export function Counter(props:CounterProps) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const getAmount = useSelector(
    (state:StoreState) => state.store.find((table) => table.order)
  );
    
    function handleClick() {
      dispatch(remove({}))
    }
 
 
  return (
   <CounterStyle className= {props.name}>
    {count === 1 ? (
     <HiOutlineTrash
      onClick={() => {}}
     ></HiOutlineTrash>
    ) : (
     <GrFormSubtract />
    )}  
    <p>{count}</p>
    <GrFormAdd onClick={() =>  setCount((count) => count + 1)}></GrFormAdd>
   </CounterStyle>
  );
 }