const getContentForTopic = (topicId: string) => {
  switch (topicId) {
    case "simulation":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">MUN Conference Simulation</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Welcome to the comprehensive simulation of a Model United Nations (MUN) conference. This simulation covers all stages of a typical MUN conference, from the initial roll call to the final adjournment of the meetings. Follow along to understand the process and interactions that occur during a conference.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">1. Roll Call</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            The conference begins with the roll call. Each delegate's country is called out, and delegates respond to indicate their presence. The roll call establishes the quorum required to start the committee sessions.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Chair:</strong> "The Chair will now conduct the roll call. When your country is called, please respond with 'Present and Voting' or 'Present'."</li>
              <li><strong>Delegate (for France):</strong> "France is present and voting."</li>
              <li><strong>Delegate (for Brazil):</strong> "Brazil is present."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">2. Setting the Agenda</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            After the roll call, the committee sets the agenda. Delegates propose agenda items, and the committee votes on which topics will be discussed. Setting the agenda is crucial as it determines the order of discussions.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Germany):</strong> "I motion to set the agenda to discuss the topic of climate change first."</li>
              <li><strong>Delegate (for India):</strong> "I second the motion."</li>
              <li><strong>Chair:</strong> "The motion to set the agenda to discuss climate change first is put to a vote. All those in favor, please raise your placards."</li>
              <li><strong>Delegates:</strong> "The motion passes by majority."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">3. Debate and Discussion</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            With the agenda set, the committee begins its debate on the first topic. Delegates deliver opening speeches, participate in discussions, and engage in negotiations.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Canada):</strong> "Canada believes that addressing climate change requires international cooperation and innovative solutions. We propose a multi-faceted approach including renewable energy investments and global carbon reduction targets."</li>
              <li><strong>Delegate (for Australia):</strong> "Australia supports Canada's proposal but also emphasizes the need for immediate action on deforestation and ocean conservation."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">4. Working Papers and Draft Resolutions</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Delegates work together to draft resolutions and working papers that outline proposed solutions. Working papers are informal documents that capture preliminary ideas, while draft resolutions are more formal and detailed.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Japan):</strong> "Japan presents a working paper outlining potential solutions for reducing greenhouse gas emissions. The document includes proposals for international agreements on emission standards."</li>
              <li><strong>Delegate (for South Africa):</strong> "South Africa supports Japan's working paper and suggests adding sections on financial assistance for developing countries to transition to renewable energy."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">5. Amendments</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Amendments are proposed changes to the draft resolutions. Delegates can suggest modifications to improve or clarify the resolution before it is put to a final vote.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Italy):</strong> "Italy proposes an amendment to the draft resolution to include a specific clause on reducing plastic waste in addition to carbon emissions."</li>
              <li><strong>Delegate (for Mexico):</strong> "Mexico seconds the amendment proposal."</li>
              <li><strong>Chair:</strong> "The proposed amendment is open for debate. Delegates may discuss the merits of the amendment before voting."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">6. Points and Motions</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            During the conference, delegates may raise points or motions to address procedural issues, request information, or propose actions. Common points include Points of Order and Points of Information.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Brazil):</strong> "Point of Order: The delegate believes that the committee is deviating from the agenda as outlined. Requesting a review of the current topic."</li>
              <li><strong>Delegate (for Spain):</strong> "Point of Information: Could the delegate from Brazil provide more details on their proposal for a new section on renewable energy?"</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">7. Voting</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Once the debate on a resolution or amendment is complete, it is put to a vote. Delegates express their support or opposition by raising their placards. The results determine whether the resolution or amendment is adopted.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Chair:</strong> "We will now vote on the draft resolution as amended. All those in favor, please raise your placards."</li>
              <li><strong>Delegate (for UK):</strong> "The resolution is adopted by a majority vote."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">8. Adjournment</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            At the end of the conference, the committee adjourns. Delegates review the outcomes of the conference, summarize the resolutions adopted, and discuss the overall experience.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Chair:</strong> "The committee has completed its work for the day. We will reconvene tomorrow at 9 AM to review the resolutions and finalize the conference agenda."</li>
              <li><strong>Delegate (for Russia):</strong> "Thank you, Chair. Looking forward to the final session tomorrow."</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">9. Post-Conference Review</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            After the conference, delegates may participate in a review session to reflect on the proceedings, discuss what went well, and identify areas for improvement.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for USA):</strong> "The review session was productive. We had fruitful discussions and adopted several impactful resolutions."</li>
              <li><strong>Delegate (for Argentina):</strong> "I agree. However, we should consider improving our negotiation strategies for future conferences."</li>
            </ul>
          </p>
        </div>
      `;
    case "resolution":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Resolution Process</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            A resolution is a formal document proposed by delegates to address the issues discussed during the MUN committee sessions. It includes preambulatory clauses that provide background information and operative clauses that outline specific actions to be taken.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Drafting a Resolution</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            The drafting process involves collaborating with other delegates to create a comprehensive document. The resolution should clearly articulate the problem, propose actionable solutions, and be structured to ensure clarity and impact.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <ul class="list-disc list-inside mb-4">
              <li><strong>Preambulatory Clauses:</strong> These clauses provide context and background information. They might include statements about past resolutions, current issues, or relevant international agreements.</li>
              <li><strong>Operative Clauses:</strong> These are the actionable components of the resolution. They outline specific steps to be taken, including recommendations, requests, or actions to be implemented by member states or organizations.</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Example Resolution Structure</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <pre class="bg-gray-100 p-4 rounded-md">
              <code>
                Title: Resolution on Climate Change Mitigation
                Preambulatory Clauses:
                - Recognizing the urgent need for climate action as highlighted in previous UN resolutions,
                - Noting with concern the increasing levels of greenhouse gases and their impact on global temperatures,
                - Emphasizing the importance of international cooperation and technological innovation,
                
                Operative Clauses:
                1. Urges member states to commit to reducing carbon emissions by 30% by 2030,
                2. Calls for the establishment of a global fund to support renewable energy projects in developing countries,
                3. Requests the creation of a task force to monitor and report on the progress of climate action initiatives,
                4. Encourages collaboration between governments, private sector, and non-governmental organizations to achieve these goals.
              </code>
            </pre>
          </p>
        </div>
      `;
    case "amendments":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Amendments</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Amendments are proposed changes to the draft resolution. They can modify, add to, or remove content from the original draft. Amendments must be debated and voted on before they become part of the final resolution.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Types of Amendments</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <ul class="list-disc list-inside mb-4">
              <li><strong>Friendly Amendments:</strong> Proposed by the sponsors of the resolution and are usually accepted without debate.</li>
              <li><strong>Unfriendly Amendments:</strong> Proposed by other delegates and require debate and voting.</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Example of an Amendment Process</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <ul class="list-disc list-inside mb-4">
              <li><strong>Delegate (for Canada):</strong> "I propose an amendment to add a clause supporting carbon offset programs in addition to the current emission reduction targets."</li>
              <li><strong>Delegate (for Brazil):</strong> "I second the amendment proposal."</li>
              <li><strong>Chair:</strong> "The amendment is open for debate. Delegates may now discuss the proposed changes."</li>
              <li><strong>Delegate (for India):</strong> "While we support the intention behind the amendment, we believe that specific guidelines for carbon offset programs should be included."</li>
              <li><strong>Delegate (for China):</strong> "We agree with the amendment but suggest modifications to include international collaboration for carbon offset projects."</li>
              <li><strong>Chair:</strong> "The debate on the amendment is closed. We will now vote on the proposed amendment."</li>
            </ul>
          </p>
        </div>
      `;
    case "points":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Points and Motions</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Points and motions are procedural tools used during MUN sessions to address issues or request specific actions. They help manage the flow of the debate and ensure that the proceedings follow the rules of procedure.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Types of Points</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <ul class="list-disc list-inside mb-4">
              <li><strong>Point of Order:</strong> Raised to address procedural issues or violations of rules.</li>
              <li><strong>Point of Information:</strong> Requests clarification or additional information from another delegate.</li>
              <li><strong>Point of Inquiry:</strong> Seeks to understand the purpose or outcome of a discussion or resolution.</li>
              <li><strong>Point of Personal Privilege:</strong> Addresses personal discomfort or issues affecting the delegate's ability to participate.</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Examples of Points</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <ul class="list-disc list-inside mb-4">
              <li><strong>Point of Order:</strong> "The delegate from Australia raises a Point of Order, noting that the debate is moving off-topic and requesting a return to the agenda."</li>
              <li><strong>Point of Information:</strong> "The delegate from South Africa requests a Point of Information to ask the delegate from France about their proposal for renewable energy funding."</li>
              <li><strong>Point of Inquiry:</strong> "The delegate from Mexico seeks clarification on the objectives of the newly proposed carbon offset program."</li>
              <li><strong>Point of Personal Privilege:</strong> "The delegate from Japan raises a Point of Personal Privilege, requesting a break due to a personal issue affecting their participation."</li>
            </ul>
          </p>
        </div>
      `;
    case "working-paper":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Working Papers</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Working papers are informal documents drafted by delegates to outline preliminary ideas and proposals. They serve as a foundation for developing formal resolutions and allow for collaborative input and feedback.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Drafting a Working Paper</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Working papers are usually presented in the early stages of a MUN session. They should clearly state the issue being addressed and propose initial solutions or approaches. Delegates collaborate on these papers, incorporating feedback and refining ideas.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Example:
            <pre class="bg-gray-100 p-4 rounded-md">
              <code>
                Title: Working Paper on Renewable Energy Initiatives
                Introduction:
                - The issue of climate change requires urgent action to transition to renewable energy sources.
                - This working paper outlines proposed initiatives for increasing renewable energy adoption.
                
                Proposals:
                1. Establish a global fund to support renewable energy projects in developing countries.
                2. Create an international task force to monitor progress and share best practices.
                3. Develop incentives for private sector investment in renewable energy technologies.
              </code>
            </pre>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Collaborating on Working Papers</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Delegates may collaborate on working papers by sharing ideas, suggesting improvements, and incorporating feedback. Working papers are often revised multiple times before being formalized into draft resolutions.
          </p>
        </div>
      `;
    case "general":
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">General MUN Guidelines</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Model United Nations (MUN) is a simulation of the UN where students represent different countries and engage in diplomatic discussions. The main objectives are to practice negotiation, debate, and resolution drafting skills.
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Key Aspects of MUN</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            <ul class="list-disc list-inside mb-4">
              <li><strong>Representation:</strong> Each delegate represents a specific country and advocates for its interests.</li>
              <li><strong>Debate:</strong> Delegates engage in structured discussions to address global issues.</li>
              <li><strong>Resolution Drafting:</strong> Delegates collaborate to draft resolutions that propose solutions to the issues discussed.</li>
              <li><strong>Rules of Procedure:</strong> MUN sessions follow specific rules to ensure orderly and productive debate.</li>
            </ul>
          </p>
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">Preparation for MUN</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            Prior to the conference, delegates should research their assigned country's positions, prepare speeches, and develop strategies for negotiation and collaboration with other delegates.
          </p>
        </div>
      `;
    default:
      return `
        <div class="content-section">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Content Not Found</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            The content you are looking for is not available. Please check the selection and try again.
          </p>
        </div>
      `;
  }
};

export default getContentForTopic;
