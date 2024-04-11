import React, { useState } from 'react';

function BuyerInfoForm({ onFormSwitch }) {
  const [buyerAddress, setBuyerAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buyer_address: buyerAddress }),
      };

      const response = await fetch('http://localhost:8000/update_buyer_info.php', requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update buyer information');
      }

      // Reset form fields after successful submission
      setBuyerAddress('');

      // Switch to HomeScreen or any other desired screen
      onFormSwitch('HomeScreen');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Buyer Information Form</h2>
      {errorMessage && <div>Error: {errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Buyer Address:
          <input
            type="text"
            value={buyerAddress}
            onChange={(event) => setBuyerAddress(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BuyerInfoForm;
