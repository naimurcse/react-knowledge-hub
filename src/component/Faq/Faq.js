import React from "react";
import "./Faq.css";

const Faq = () => {
   return (
      <div className="faq">
         <h1>FAQ</h1>
         {/* Question 01 */}
         <div className="faq__content">
            <h3 className="faq__question">
               What is the difference between <span>props vs state</span> in react js?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>'props' Role</h4>
                  <p>
                     01. <span>'props'</span> (short for properties) are a mechanism for passing
                     data from a parent component to its child component.
                  </p>
                  <p>
                     02. They are immutable and are passed down from the parent to the child
                     component.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>'props' Uses</h4>
                  <p>
                     01. <span>'props'</span> are used to communicate information from a
                     higher-level component (parent) to a lower-level component (child).
                  </p>
                  <p>
                     02. They enable the composition of components, allowing for the creation of
                     complex UI structures from simpler building blocks.
                  </p>
               </div>
            </div>

            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>'state' Role</h4>
                  <p>
                     01. <span>'state'</span> represents the internal state of a component and is
                     used for managing dynamic data that may change over time.
                  </p>
                  <p>02. It is mutable and controlled by the component itself.</p>
               </div>

               <div className="faq__concept">
                  <h4>'state' Uses</h4>
                  <p>
                     01. <span>'state'</span> is employed to handle and respond to user
                     interactions, manage component-specific data, and trigger re-renders when the
                     state changes.
                  </p>
                  <p>02. Components can initialize, update, and consume their own state.</p>
               </div>
            </div>
         </div>

         {/* Question 02 */}
         <div className="faq__content">
            <h3 className="faq__question">
               How does <span>useState()</span> work?
            </h3>
            <div className="faq__answer">
               <div className="faq__concept">
                  <h4>01. Initialization</h4>
                  <p>
                     01. <span>'useState'</span> is a function that takes an initial value as its
                     argument and returns an array with two elements. Example: <br />
                     <code>const [state, setState] = useState(initialValue);</code>
                  </p>
                  <p>
                     02. The first element ('state') is the current state value, and the second
                     element ('setState') is a function to update the state.
                  </p>
               </div>

               <div className="faq__concept">
                  <h4>02. Destructuring</h4>
                  <p>
                     The array returned by useState is typically destructured to get the current
                     state value (count) and the function to update the state (setCount). Example:{" "}
                     <br />
                     <code>const [count, setCount] = useState(0);</code>
                  </p>
               </div>
            </div>

            <div className="faq__concept">
               <h4>03. Initial Render</h4>
               <p>
                  During the initial render of the component, the <span>useState</span> hook is
                  called, and the initial value is set as the initial state.
               </p>
            </div>

            <div className="faq__concept">
               <h4>04. Updating State</h4>
               <p>
                  01. When the component needs to update its state, the state updater function
                  (setCount in this example) is called with the new value.
               </p>
               <p>
                  02. React schedules an update, and on the next render, the new state value is
                  used.
               </p>
            </div>

            <div className="faq__concept">
               <h4>05. Re-render</h4>
               <p>
                  01. When the state is updated using the state updater function, React schedules a
                  re-render of the component.
               </p>
               <p>02. During the re-render, the component receives the updated state value.</p>
            </div>
         </div>
      </div>
   );
};

export default Faq;
