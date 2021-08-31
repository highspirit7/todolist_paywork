import { Modal } from "antd";

interface IModalParameters {
  title?: string;
  content: string;
}

const warning = ({ title, content }: IModalParameters): void => {
  Modal.warning({
    title,
    content,
  });
};

const success = ({ content }: IModalParameters): void => {
  Modal.success({
    content,
  });
};

export { warning, success };
