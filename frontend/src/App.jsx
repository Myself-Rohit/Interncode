import {
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  return (
    <>
      <div>INTERCODE</div>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignIn>
        <SignOutButton />
      </SignIn>
      <UserButton />
    </>
  );
}

export default App;
