export default function SigninPanel() {
  return (
    <div className="pb-20">
      <div className="m-4 p-4 border rounded-md md:flex md:justify-between md:px-16 max-w-3xl mx-auto  lg:py-10">
        <div>
          <p className="pt-2 text-[12px] text-muted-foreground">Members only</p>
          <p className="text-[14px]">
            Sign in for order tracking & early access
          </p>
          <p className="text-[12px] text-muted-foreground">
            Google sign-in: No password needed
          </p>
        </div>

        <button className=" cursor-pointer border w-full my-4 text-sm py-2 rounded-md bg-blue-500 text-white md:w-1/3 ">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
