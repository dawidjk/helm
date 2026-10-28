export type QuizAnswer = {id: string; points: number};
type Priority = {id: string; questionIds: string[]; title: string; action: string; to: string; guide: string};
const PRIORITIES: Priority[] = [
  {id:'payments',questionIds:['payment_verification','wire_approval','vendor_bank_change'],title:'Verify payment changes independently',action:'Agree who calls a known contact number and who gives the second approval before a changed payment is sent.',to:'/resources/invoice-fraud-red-flags/',guide:'Review invoice-fraud checks'},
  {id:'accounts',questionIds:['mfa'],title:"Check which accounts require MFA",action:"Compare your email and financial account list with the MFA enforcement records. Record any uncovered accounts or exceptions you cannot verify.",to:'/resources/mfa-methods-compared/',guide:'Compare MFA methods'},
  {id:'email',questionIds:['email_auth'],title:"Check your domain’s email authentication",action:"List the services that send email for your domain. Check that their legitimate messages pass DMARC through aligned SPF or DKIM before changing the policy.",to:'/resources/what-is-dmarc/',guide:'Understand DMARC and alignment'},
  {id:'response',questionIds:['incident_plan'],title:'Write down the first incident-response steps',action:"Record who to call after suspected payment fraud or account compromise. Agree who preserves evidence and coordinates containment.",to:'/resources/incident-response-plan-small-business/',guide:'Prepare an incident-response plan'},
  {id:'training',questionIds:['training_cadence'],title:'Practice the checks staff need to use',action:'Review the reporting route and payment-verification procedure with staff, and choose when to repeat that practice.',to:'/resources/managed-awareness-training-vs-diy/',guide:'Plan awareness training'},
  {id:'impersonation',questionIds:['deepfake_awareness'],title:'Prepare for voice and video impersonation',action:'Use a familiar contact route to verify unusual requests, even when a caller sounds or looks like someone the team knows.',to:'/resources/deepfake-ceo-fraud/',guide:'Review deepfake payment-fraud precautions'},
  {id:'ai',questionIds:['ai_tool_policy'],title:'Define the boundary for staff AI use',action:'Agree which tools and information staff may use, who reviews output, and when a proposed workflow needs further review.',to:'/resources/ai-access-business-documents/',guide:'Review AI document-access decisions'},
  {id:'insurance',questionIds:['insurance_questionnaire'],title:'Review insurance answers against evidence',action:"If insurance applies, compare each questionnaire answer with dated evidence for the accounts, systems and period it covers. Record unsupported answers and outstanding work.",to:'/resources/cyber-insurance-questionnaire/',guide:'Review a cyber-insurance questionnaire'},
];

/** Select three distinct topics from reported answers; ties retain a fixed order. */
export function quizPriorities(answers: QuizAnswer[]) {
  return PRIORITIES.map((priority,index)=>({...priority,index,points:Math.min(...priority.questionIds.map(id=>answers.find(a=>a.id===id)?.points ?? 0))}))
    .sort((a,b)=>a.points-b.points || a.index-b.index).slice(0,3);
}
