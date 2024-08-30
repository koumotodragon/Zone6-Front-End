
import { Pill } from "../UI";
import Wrapper from "../assets/wrappers/Categories";
export const Categories = (props: any) => {

  const { tages } = props;
  return (
    <Wrapper>
      <div
        className="Categories-Container"
        style={{
          overflowX: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        {tages.map((item: string, index: number) => {
          return <Pill key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
};
