import styled from "styled-components";

const StyleItem = styled.div`

    .expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background-color: #4b4b4b;
}

.expense-item__description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
}

.expense-item h2 {
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
}

.expense-item__price {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
}

.expenses {
  padding: 1rem;
  background-color: rgb(31,31,31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.25);
}

@media (min-width: 580px) {
  .expense-item__description {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }

  .expense-item__description h2 {
    font-size: 1.25rem;
  }

  .expense-item__price {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}

.dataGasto {
  background-color: #40005d;
  border: 1px solid white;
  border-style: outset;
  border-radius: 12px;
  color: #bfc1ecaa;
  font-weight: 450;
  font-family: cursive;
   .year {
    font-weight: 950;
   }
}

.expenses {
  padding: 1rem;
  background-color: rgb(31,31,31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.25);
}

 `; 

export default StyleItem;

