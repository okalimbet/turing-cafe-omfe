export const getAllReservations = async () => {
  const response = await fetch(
    'http://localhost:3001/api/v1/reservations'
  )
  
  return await response.json();
};