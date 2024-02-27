
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function IconCheckboxes({ label, handleRemove }) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleClick = () => {
        handleRemove();
    }

    return (
        <div>
            <FormControlLabel label={label} control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} />
            <Checkbox
                icon={<CloseIcon />}
                checkedIcon={<CloseIcon />}
                onClick={handleClick}
            />
        </div>
    );
}