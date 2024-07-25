import ConvertBtn from "../buttons/convertBtn";
import Input from "../inputs/input";
import "./form.css";

export default function Form() {
  return (
    <div className="custom-form">
      <Input />
      <div>
        <ConvertBtn />
      </div>
    </div>
  );
}
