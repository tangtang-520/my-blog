import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
// import { LockIcon } from "./LockIcon.jsx";
import { forwardRef, useImperativeHandle } from "react";
import { login } from "../../api/login/index.js";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { setToken } from '../../utils/author.ts'

interface loginComponent {
  ref: any
}

export const LoginUser: React.FC<loginComponent> = forwardRef(({}, ref) => {
  const { onOpenChange } = useDisclosure();
  const [usrname, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        onOpen,
      };
    },
    []
  );

  const onUsrnameChange = (value:string)=> {
    setUsername(value)
  }
  const onPassWordChange = (value: string) => {
    setPassword(value)
  }

  const onSubmit = () => {
    const data = {
      username: usrname,
      password: password,
    };
    login(data).then((res) => {
      console.log(res);
      if (res.status === 1) {
        setIsInvalid(true);
        setErrorMessage(res.msg);
        setIsOpen(true);
      }else {
        setToken(res.data?.token);
        setIsOpen(!isOpen);
      }
    });
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  defaultValue={usrname}
                  autoFocus
                  endContent={
                    <MailIcon className=" text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="user"
                  placeholder="请输入你的账号"
                  variant="bordered"
                  isInvalid={isInvalid}
                  onValueChange={onUsrnameChange}
                />
                <Input
                  isRequired
                  endContent={
                    // <LockIcon className=" text-default-400 pointer-events-none flex-shrink-0" />
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  defaultValue={password}
                  label="Password"
                  placeholder="请输入你的密码"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  isInvalid={isInvalid}
                  errorMessage={errorMessage}
                  onValueChange={onPassWordChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  关闭
                </Button>
                <Button color="primary" onClick={onSubmit}>
                  登录
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
