import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./test/StyledBadge";
import { IconButton } from "./test/IconButton";
import { EyeIcon } from "./test/EyeIcon";
import { EditIcon } from "./test/EditIcon";
import { DeleteIcon } from "./test/DeleteIcon";


export const getStaticProps = async () => {
    // const user = process.env.DB_USER;
    // console.log(user);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const myresult = await res.json();
    return {
        props: {
            myresult,
        },
    }
}

export default function post() {
    const columns = [
        { name: "NAME", uid: "name" },
        { name: "ROLE", uid: "role" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "action" },
    ];
    const users = [
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 2,
            name: "Zoey Lang",
            role: "Technical Lead",
            team: "Development",
            status: "paused",
            age: "25",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            email: "zoey.lang@example.com",
        },
        {
            id: 3,
            name: "Jane Fisher",
            role: "Senior Developer",
            team: "Development",
            status: "active",
            age: "22",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            email: "jane.fisher@example.com",
        },
        {
            id: 4,
            name: "William Howard",
            role: "Community Manager",
            team: "Marketing",
            status: "vacation",
            age: "28",
            avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
            email: "william.howard@example.com",
        },
        {
            id: 5,
            name: "Kristen Copper",
            role: "Sales Manager",
            team: "Sales",
            status: "active",
            age: "24",
            avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
            email: "kristen.cooper@example.com",
        },
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
                <Table.Body items={users}>
                    {
                        users.map(mydata =>
                            <Table.Row key={mydata.id}>
                                <Table.Cell><User squared src={mydata.avatar} name={mydata.name} css={{ p: 0 }}>
                                    {mydata.email}
                                </User></Table.Cell>

                                <Table.Cell><Col>
                                    <Row>
                                        <Text b size={14} css={{ tt: "capitalize" }}>
                                            {mydata.role}
                                        </Text>
                                    </Row>
                                    <Row>
                                        <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                                            {mydata.team}
                                        </Text>
                                    </Row>
                                </Col></Table.Cell>

                                <Table.Cell>
                                    <StyledBadge type={mydata.status}>{mydata.status}</StyledBadge>
                                </Table.Cell>
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