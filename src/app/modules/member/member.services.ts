import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createMemberIntoDB = async (data: { name: string; email: string; phone: string; membershipDate: Date }) => {
    
    const memberData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        membershipDate: data.membershipDate, 
    };

    const result = await prisma.member.create({
        data: memberData,
    });

    return result; 
};

const getAllMembersIntoDB = async () =>{
    const members = await prisma.member.findMany();
    return members;
}

const getSingleMemberIntoDB = async (memberId:string) =>{
    const result = await prisma.member.findUnique({
        where:({
            memberId:memberId
        }),
    })
    return result;
}

const updateMemberIntoDb = async (memberId: string, data: { name?: string; email?: string; phone?: string }) =>{

    const result = await prisma.member.update({
        where:{memberId},
        data,
    })
    return result;

}

const deleteMemberIntoDb = async (memberId:string) =>{
    const result = await prisma.member.delete({
        where:{memberId}
    })
    return result;
}

export const memberServices = {
    createMemberIntoDB,
    getAllMembersIntoDB,
    getSingleMemberIntoDB,
    updateMemberIntoDb,
    deleteMemberIntoDb

};
