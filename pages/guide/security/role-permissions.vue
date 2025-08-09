<template>
  <div class="flex flex-col w-full h-full text-gray-800 my-4">

    <!-- Hero Section -->
    <section class="w-full px-6 pt-10 md:px-10 md:pt-10 mx-auto">
      <div class="max-w-5xl">
        <h1 class="text-sm font-bold text-blue-700 uppercase tracking-wide">Security</h1>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-black">Roles & Permissions</h2>
        <h3 class="mt-1 text-md md:text-lg font-extrabold text-gray-400">Learn about Betify roles and permissions</h3>
      </div>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Overview</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Betify uses a role-based access model to ensure fairness, transparency, and decentralization. There are four core roles:
      </p>
        <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
          <li>Admin: Platform overseer, handles verification, governance, and dispute escalation</li>
          <li>Creator: Creates new prediction markets (disputes)</li>
          <li>Resolver: Resolves disputes after the deadline</li>
          <li>User (Bettor): Places bets on outcomes</li>
        </ul>
      <p class="text-base leading-relaxed text-gray-800">
        Each role has specific permissions, restrictions, and responsibilities to keep the system balanced and trustless.
      </p>
    </section>

    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Why Roles Matter</h1>
      <p class="text-base leading-relaxed text-gray-800">
        Prediction markets carry real financial value. To prevent manipulation, Betify assigns strict rules to each role:
      </p>
        <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
          <li>Creators and resolvers can't bet on their own disputes</li>
          <li>Users can freely bet, but cannot interfere with resolutions</li>
          <li>Resolvers must remain impartial</li>
          <li>Admins only intervene in edge cases or disputes that go unresolved</li>
        </ul>
      <p class="text-base leading-relaxed text-gray-800">
        This separation of duties guarantees fair resolution, accountability, and decentralized governance.
      </p>
    </section>


    <section class="w-full px-6 pt-6 pb-8 md:px-16">
      <div class="max-w-5xl mx-auto overflow-x-auto">
        <h1 class="flex flex-row items-center pb-2 justify-center text-2xl font-semibold text-gray-900">Roles Overview</h1>
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr class="">
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Permissions</th>
              <th class="py-3 px-4 text-sm font-semibold text-gray-700">Restrictions</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Admin</td>
              <td class="py-3 px-4 text-sm text-gray-800">Platform operator</td>
              <td class="py-3 px-4 text-sm text-gray-800">Verify users/disputes, assign roles, resolve unresolved disputes</td>
              <td class="py-3 px-4 text-sm text-gray-800">Cannot create or resolve regular disputes unless intervening</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Creator</td>
              <td class="py-3 px-4 text-sm text-gray-800">Starts a new prediction market</td>
              <td class="py-3 px-4 text-sm text-gray-800">Set dispute details, assign resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">Cannot bet in the dispute</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">Resolver</td>
              <td class="py-3 px-4 text-sm text-gray-800">Judges the outcome</td>
              <td class="py-3 px-4 text-sm text-gray-800">Resolve or cancel a dispute</td>
              <td class="py-3 px-4 text-sm text-gray-800">Cannot bet or be the creator</td>
            </tr>
            <tr>
              <td class="py-3 px-4 text-sm text-gray-800">User (Bettor)</td>
              <td class="py-3 px-4 text-sm text-gray-800">Participates in markets</td>
              <td class="py-3 px-4 text-sm text-gray-800">Place bets, refer friends, manage wallet</td>
              <td class="py-3 px-4 text-sm text-gray-800">No permissions over outcomess</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

<section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto">
  <div class="flex flex-col items-start justify-center space-y-2 my-2">
    <h1 class="text-2xl font-semibold text-gray-900">Role Permissions Explained</h1>

    <!-- Admin -->
    <h2 class="text-xl leading-relaxed text-gray-800">
      Admin: Appointed platform operators or trusted stewards.
    </h2>
    <div class="flex flex-col items-start justify-center space-y-2">
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Responsibilities:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Verify new users and disputes</li>
        <li>Handle escalations if the resolver fails</li>
        <li>Moderate or remove malicious users</li>
        <li>Maintain platform integrity</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Permissions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Force-resolve expired or abandoned disputes</li>
        <li>Approve or reject verification requests</li>
        <li>Assign or remove resolver/creator roles</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Typical Use Cases:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Verifying a public dispute before promotion</li>
        <li>Resolving a dispute where the resolver went inactive</li>
        <li>Banning a spammy or fraudulent dispute</li>
        <li>Promoting trusted creators or resolvers</li>
      </ul>
    </div>
  </div>

  <!-- Creator -->
  <div class="flex flex-col items-start justify-center space-y-2 my-2">
    <h2 class="text-xl leading-relaxed text-gray-800">
      Creator: Any verified or unverified user who creates a new dispute.
    </h2>
    <div class="flex flex-col items-start justify-center space-y-2">
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Responsibilities:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Define the market: title, description, outcomes, deadline, resolver</li>
        <li>Choose dispute type: public or private</li>
        <li>Promote the dispute (especially for private ones)</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Permissions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Use /create to launch new disputes</li>
        <li>Set payout currency and access rules</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Restrictions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Cannot bet in the dispute they created</li>
        <li>Cannot resolve the dispute</li>
        <li>Cannot change dispute settings once published</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Common Use Cases:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Creating a sports match prediction</li>
        <li>Running a private challenge with friends</li>
        <li>Launching a crypto price forecast market</li>
        <li>Publishing a public event with high engagement potential</li>
      </ul>
    </div>
  </div>

  <!-- Resolver -->
  <div class="flex flex-col items-start justify-center space-y-2 my-2">
    <h2 class="text-xl leading-relaxed text-gray-800">
      Resolver: A neutral party responsible for determining the outcome.
    </h2>
    <div class="flex flex-col items-start justify-center space-y-2">
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Responsibilities:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Monitor dispute until deadline</li>
        <li>Choose the correct winning outcome after event conclusion</li>
        <li>Optionally cancel dispute and issue refunds</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Permissions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Use /mydisputes to view and resolve disputes</li>
        <li>Select outcome or issue refund after deadline</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Restrictions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Cannot bet in the dispute they are resolving</li>
        <li>Cannot be the same user as the dispute creator</li>
        <li>Cannot resolve before the deadline ends</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Common Use Cases:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Acting as a trusted third party for public predictions</li>
        <li>Being a designated resolver for a private group challenge</li>
        <li>Resolving outcomes fairly based on public data</li>
        <li>Canceling invalid or inconclusive disputes</li>
      </ul>
    </div>
  </div>

  <!-- User -->
  <div class="flex flex-col items-start justify-center space-y-2 my-2">
    <h2 class="text-xl leading-relaxed text-gray-800">
      User: Any participant who places bets on outcomes.
    </h2>
    <div class="flex flex-col items-start justify-center space-y-2">
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Responsibilities:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Explore active disputes and decide what to bet on</li>
        <li>Place bets using internal balance or direct transfer via @send</li>
        <li>Track your betting history and results</li>
        <li>Refer new users and earn commissions</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Permissions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Use commands like /mybets, /wallet, /invite</li>
        <li>Join any public or shared private dispute</li>
        <li>Place multiple bets in the same dispute</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Restrictions:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Cannot create or resolve disputes</li>
        <li>Cannot bet in disputes where they are assigned as creator or resolver</li>
        <li>Cannot access private disputes without a link</li>
      </ul>
      <h3 class="text-lg leading-relaxed text-gray-800 font-normal">Common Use Cases:</h3>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
        <li>Placing bets on trending sports or crypto events</li>
        <li>Joining private challenges from friends or influencers</li>
        <li>Using the referral system to earn passive income</li>
        <li>Tracking personal stats across all disputes</li>
      </ul>
    </div>
  </div>
</section>


    <section class="w-full space-y-2 flex flex-col px-6 py-6 md:px-10 mx-auto"> 
      <h1 class="text-2xl font-semibold text-gray-900">Example Role Scenarios</h1>
      <h1>1. Fair Crypto Prediction</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
          <li>Alice creates a dispute: "Will ETH close above $3k by Friday?"</li>
          <li>She assigns Bob as the resolver.</li>
          <li>Carol and Dave place bets.</li>
          <li>After Friday, Bob selects the winning outcome.</li>
          <li>Alice earns 0.5% fee, Bob earns 0.5% for resolution.</li>
      </ul>
      <p>All roles respected.</p>
      <h1>2. Resolver Fails to Act</h1>
      <ul class="space-y-2 text-base text-gray-700 list-disc pl-6">
          <li>Resolver does not respond within 48h after deadline.</li>
          <li>Users report in community or support group.</li>
          <li>Admin steps in and resolves based on objective data.</li>
      </ul>
      <p>Users protected. Admins only intervene when necessary.</p>
    </section>


    <NavigationWrapper leftText="Previous" rightText="Next" leftPath="/guide/disputes/what-is-a-dispute" rightPath="/guide/disputes/fees" />
  </div>
</template>

<script lang="ts" setup>
import { UIcon } from '#components';
import BetifyText from '~/components/BetifyText.vue';
import NavigationWrapper from '~/components/navigation/NavigationWrapper.vue';

// No script logic needed for static documentation
</script>

<style scoped>
/* Optional: Customize typography further */
</style>
