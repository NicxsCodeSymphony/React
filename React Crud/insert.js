import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const InsertButton = ({ onClick }) => {
    
    const history = useHistory();

    const handleInsertClick = () => {
      onClick();
    };

    return (
        <button onClick={handleInsertClick}>Insert</button>
    )    
}
export const handleInsert = (data, setData, url) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) {
            setData(prevData => ({
                ...prevData,
                people: [...(prevData.people || []), data]
            }));
            return res.json(); 
        } else {
            console.error('Failed to insert:', res.status, res.statusText);
            throw new Error('Failed to insert data');
        }
    })
    .catch(err => {
        console.error("Network error:", err);
        throw err;
    });
};


export default InsertButton