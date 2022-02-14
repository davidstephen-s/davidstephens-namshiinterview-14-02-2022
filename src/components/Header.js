import React from 'react';

export default function Header(props) {
  return (
    <header>

        <nav class="navbar shadow-sm p-3 mb-5 bg-white  rounded">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">
          {props.countCartItems ? (
         <span class="badge rounded-pill bg-warning text-dark">{props.countCartItems}</span>
          ) : (
            ''
          )}

    </span>
 <h4>
    E-commerce app
 </h4>
  </div>
</nav>

    
    </header>
  );
}
