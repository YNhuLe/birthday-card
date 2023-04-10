import React from "react";

//passing object for the List
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // construct the object and take each property of the person
        const { id, name, age, image } = person;

        // return component
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>

            <div>
              <h4>{name}</h4>
              <p> {age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
