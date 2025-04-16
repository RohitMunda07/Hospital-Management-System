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
    name: "Sent to Hospital",
    Component: () => <div>Step 3 Content</div>,
  },
  {
    name: "Approved by Hospital",
    Component: () => <div>Step 4 Content</div>,
  },
  {
    name: "Sent to Insurance",
    Component: () => <div>Step 5 Content</div>,
  },
  {
    name: "Insurance Approved",
    Component: () => <div>Step 6 Content</div>,
  },
  {
    name: "Amount Disbursed",
    Component: () => <div>Step 7 Content</div>,
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