import React from 'react'

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "turquoise" : "red"
    }
    
    return (      
      <div className="box" style={styles} onClick={props.toggle}></div>
    ) 
}

