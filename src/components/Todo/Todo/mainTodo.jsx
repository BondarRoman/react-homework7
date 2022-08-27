import React from "react";
import { useRef } from "react";
import { useState } from "react";
import '../Todo/todo.css'
import Point from './images/point.png'


export const MainTodo =()=>{
    const data = useRef('')
    const [dataQuests,setDataQuests] = useState([])

    const addQuest=()=>{
        setDataQuests(prev =>[...prev,data.current])
        console.log(dataQuests)
    }

    const Remove=(id)=>{
        
        const currBtn = document.getElementById(id)
        console.log("удалили блок" + id)
        console.log(id)
        currBtn.remove(`${id}`)
    }
    const Complete=(id)=>{
        const currBtn = document.getElementById(id)
        const img = document.createElement('img')
        img.style.height = "30px"
        img.style.width = "30px"
        img.src = Point
        img.alt = 'Я картинка'
        console.log("Завершили блок" + id)
        console.log(id)

        if(!currBtn.classList.contains('complete'))
        {
            currBtn.classList.add('complete')
             currBtn.append(img)
              console.log(currBtn.classList.contains('complete'))
        }

    }
    return(
        <div className="mainPageTodo">
            <p>Последняя добавленная задача: </p>
            <p>{data.current}</p>
            <input placeholder="Введите задачу" onChange={(e)=>{data.current = e.target.value}}/>
            <div className="ToDo">
            <button onClick={addQuest}>Добавить</button>
               <h1>Список задач </h1>
               {dataQuests.map((quest,id)=>(
                <div key={id} id = {id} className='todoQuest'>
                <h3>{quest}</h3>
                <button onClick={()=>{Remove(id)}} id = {id}>Удалить </button>
                <button onClick={()=>{Complete(id)}} id = {id}>Завершить </button>
                </div>
               ))}
            </div>

        </div>
    )
}