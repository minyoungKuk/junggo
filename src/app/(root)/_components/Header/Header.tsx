import Button from "@/components/Button";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b border-slate-600 sticky top-0 z-10 bg-white">
      <div className="container max-w-[1024px] mx-auto px-5 h-16 flex items-center">
        <Link href="/" className="text-lg font-bold">
          중고마켓
        </Link>

        <nav className="ml-10">
          <ul className="flex gap-x-8">
            <li>
              <Link href="/">구입하기</Link>
            </li>
            <li>
              <Link href="/deals/create">판매하기</Link>
            </li>
            <li>
              <Link href="/my/deals">내 판매글</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto">
          <ul className="flex gap-x-2">
            <li>
              <Button href="/log-in" size="sm">
                로그인
              </Button>
            </li>
            <li>
              <Button href="/sign-up" size="sm" outline>
                회원가입
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
