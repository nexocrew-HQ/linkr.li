"use client";
import { requireLogin } from '@/backend/actions';
import { Card, Button, Avatar, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';
import Image from "next/image";
import { useEffect, useState } from 'react';
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();
import { AUTHURL } from '@/config';
import Icon from './boxicon';

interface DashHomeProps {
    UserID: string;
    Links: [string];
    AccessToken: string;
    changeTab: (tab: string) => void;
}

interface APIUserData {
    Username: string;
    Avatar: string;
    Email: string;
    Banner: string;
    ID: string;
}


export function DashHome({ UserID, Links, AccessToken, changeTab }: DashHomeProps): JSX.Element {

    const [useAPIData, setAPIData] = useState<APIUserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAPIData() {
            const member = await oauth.getUser(AccessToken).catch(() => {
                return requireLogin(window.open(AUTHURL, "_self"));
            })

            setAPIData(
                {
                    Username: member.username,
                    Avatar: member.avatar,
                    Email: member.email,
                    Banner: member.banner,
                    ID: member.id
                }
            );
            setLoading(false);

        }
        getAPIData();


    })



    if (loading) {
        return (
            <div className="w-full max-w-sm mt-16 bg-zinc-600 shadow-xl rounded-xl text-gray-900 ml-4 p-4">
                <div className="rounded-t-lg h-32 bg-gray-700 animate-pulse"></div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-700 animate-pulse"></div>
                <div className="text-center mt-2">
                    <div className="h-6 bg-gray-700 animate-pulse rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-700 animate-pulse rounded w-1/3 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <>

            <div className="flex space-x-4 ml-4 mt-16">
                <div className="w-full max-w-sm bg-zinc-600 shadow-xl rounded-xl text-gray-900">
                    <div className="rounded-t-lg h-32 overflow-hidden">
                        <Image
                            className="object-cover object-top w-full"
                            src={`https://cdn.discordapp.com/banners/${useAPIData?.ID}/${useAPIData?.Banner}.webp?size=1024`}
                            alt="banner"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <Image
                            className="object-cover object-center h-32"
                            src={`https://cdn.discordapp.com/avatars/${useAPIData?.ID}/${useAPIData?.Avatar}.png?size=512`}
                            alt="profile"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="text-2xl font-extrabold">{useAPIData?.Username}</h2>
                        <p className="text-gray-200">Email: {useAPIData?.Email}</p>
                        <p className="text-gray-200">ID: {useAPIData?.ID}</p>
                    </div>
                    <br />
                    <br />
                </div>
                <div className='ml-96 w-full'>
                    <Card className="max-w-[400px] ml-96">
                        <CardHeader className="flex gap-3">
                            <Icon name='bx-link' size='50px' />
                            <div className="flex flex-col">
                                <p className="text-md">Your Links</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Your have currently {Links.length} Links</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            {/* Add switch tab */}
                            <Button
                                onClick={() => changeTab("links")} // Wechselt zum "links"-Tab
                            >
                                Click here to view your links
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}