import { Request, Response } from "express";
import { memberServices } from "./member.services";



const createMember = async (req:Request,res:Response)=>{
    const result = await memberServices.createMemberIntoDB(req.body);

   res.status(201).send({
     success: true,
      status: 201, 
      message: "Member created successfully",
       data: result
     });

}

const getAllMembers = async (req:Request, res:Response)=>{
  const result = await memberServices.getAllMembersIntoDB();
  res.status(200).send({
    success: true,
    status: 200,
    message: "Members retrieved successfully",
    data: result
  })
}

const getMemberById = async (req: Request, res: Response) => {
  const memberId = req.params.memberId;
  const member = await memberServices.getSingleMemberIntoDB(memberId);
  if (member) {
      res.json({
          success: true,
          status: 200,
          message: "Member retrieved successfully",
          data: member,
      });
  } else {
      res.status(404).json({
          success: false,
          status: 404,
          message: "Member not found",
      });
  }
};

const updateMemberById = async (req:Request, res:Response)=>{
  const result = await memberServices.updateMemberIntoDb(req.params.memberId, req.body);
  res.status(200).send({
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result
  })
};

const deleteMemberById = async (req:Request, res:Response)=>{
  const result = await memberServices.deleteMemberIntoDb(req.params.memberId);
  res.status(200).send({
    success: true,
    status: 200,
    message: "Member deleted successfully",
    data: result
  })
}

export const memberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById
}