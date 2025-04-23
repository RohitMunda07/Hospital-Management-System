import CheckoutStepper from "../Stepper/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Submitted to Admin",
    Component: () => <div>Step 1 Content</div>,
  },
  {
    name: "Verified by Admin",
    Component: () => <div>Step 2 Content</div>,
  },
  {
    name: "Sent to HR",
    Component: () => <div>Step 3 Content</div>,
  },
  {
    name: "Approved by HR",
    Component: () => <div>Step 4 Content</div>,
  },
  {
    name: "Amount Disbursed",
    Component: () => <div>Step 5 Content</div>,
  },
];


function Stepper() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default Stepper;