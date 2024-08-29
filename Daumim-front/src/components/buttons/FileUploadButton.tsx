// PhotoUploadButton.tsx
import React from 'react';

interface PhotoUploadButtonProps {
    onFileSelected: (file: File | null) => void;
}

export const PhotoUploadButton: React.FC<PhotoUploadButtonProps> = ({ onFileSelected }) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onFileSelected(file);
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="file-input" style={styles.button}>
                העלאת תמונה
            </label>
        </div>
    );
};

const styles = {
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#bd9c75',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily:'sans-serif',
    },
    preview: {
        marginTop: '10px',
        maxWidth: '100%',
        height: 'auto',
    },
};
