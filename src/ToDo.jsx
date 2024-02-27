
import TextField from '@mui/material/TextField';
import Items from './Items'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function ToDo({ labels }) {
    const [itemsList, setItemsList] = useState(labels);//['banana',carrots,...]

    const handleDown = (event) => {
        if (event.key === 'Enter') {
            setItemsList(prevItems => [
                ...prevItems, { id: uuid(), label: event.target.value }
            ])
            event.target.value = '';
        }
    }

    const handleRemove = (id) => {
        setItemsList(prevItems => {
            return prevItems.filter((item) => item.id !== id)
        })

    }

    return (
        <div>
            <h1>To do List</h1>
            {
                itemsList.map((item) => (
                    <Items
                        key={item.id}
                        label={item.label}
                        handleRemove={() => handleRemove(item.id)}
                    />
                ))
            }
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                onKeyDown={handleDown}
            />
        </div>
    )
}
