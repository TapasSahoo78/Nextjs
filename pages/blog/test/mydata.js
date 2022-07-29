import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";


export const getStaticProps = async () => {
    const res = await fetch('https://reqres.in/api/users?page=2');
    const myresult = await res.json();
    return {
        props: {
            myresult,
        },
    }
}

export default function mydata(props) {
    //console.log(props.myresult.data); return;
    const columns = [
        { name: "ID", uid: "id" },
        { name: "EMAIL", uid: "email" },
        { name: "FIRST_NAME", uid: "first_name" },
        { name: "LAST_NAME", uid: "last_name" },
        { name: "AVATAR", uid: "avatar" },
        { name: "ACTIONS", uid: "action" },
    ];

    return (
        <>
            <Table
                aria-label="Example table with custom cells"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={props.myresult.data}>
                    {
                        props.myresult.data.map(mydata =>
                            <Table.Row key={mydata.id}>
                                <Table.Cell>{mydata.id}</Table.Cell>
                                <Table.Cell>{mydata.email}</Table.Cell>
                                <Table.Cell>{mydata.first_name}</Table.Cell>
                                <Table.Cell>{mydata.last_name}</Table.Cell>
                                <Table.Cell>{mydata.avatar}</Table.Cell>
                                <Table.Cell>

                                    <Row justify="center" align="center">
                                        <Col css={{ d: "flex" }}>
                                            <Tooltip content="Details">
                                                <IconButton onClick={() => console.log("View user", mydata.id)}>
                                                    <EyeIcon size={20} fill="#979797" />
                                                </IconButton>
                                            </Tooltip>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <Tooltip content="Edit user">
                                                <IconButton onClick={() => console.log("Edit user", mydata.id)}>
                                                    <EditIcon size={20} fill="#979797" />
                                                </IconButton>
                                            </Tooltip>
                                        </Col>
                                        <Col css={{ d: "flex" }}>
                                            <Tooltip
                                                content="Delete user"
                                                color="error"
                                                onClick={() => console.log("Delete user", mydata.id)}
                                            >
                                                <IconButton>
                                                    <DeleteIcon size={20} fill="#FF0080" />
                                                </IconButton>
                                            </Tooltip>
                                        </Col>
                                    </Row>

                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </>
    );
}
