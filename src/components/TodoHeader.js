import React from 'react'

export default function TodoHeader({children, loading}) {
    
    return (
        /** React.Children que nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children. */
        //No importa si viene un elemento, o dos o null siempre nos devuelve un array
        <header>      
            { 
            React.Children
            .toArray(children)
            .map(child => React.cloneElement(child, {loading: loading}))
            }
        </header>
        //Por cada child vamos a llamar a clone element.
  ); //Crear elemento a partir de otro (elemento, objeto con las props que queramos que tenga)
}
