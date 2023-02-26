import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
const DivStyled = styled.div`
  color: ${({ theme }) => theme.dark.fg};
`;

export default function ViewCounter({ slug }) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_VIEW_ROUTE}/${slug}`,
    fetcher,
  );

  if (error) return <p>!</p>;
  else if (isLoading) return <p>--</p>;
  else
    return (
      <DivStyled className="viewCount">
        <p className="count">{data?.views || 0} views</p>
      </DivStyled>
    );
}
