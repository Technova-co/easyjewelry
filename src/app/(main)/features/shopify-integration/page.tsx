import Heading from '@/components/ui/heading';
import SectionBanner from '@/components/shortCode/SectionBanner';
import Link from 'next/link';

export default function ShopifyIntegrationPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <SectionBanner
              variant="two"
              outlineButtonText="Features"
              title="Shopify Integration"
              description="Connect your jewelry inventory to your Shopify store. Manage which items are live, sync prices, and push inventory updates from EasyJewelry directly to your online storefront."
            />

            <div className="mt-10 md:mt-14">
              <p className="text-offWhite/80 leading-relaxed">
                Running an online jewelry store alongside a physical retail operation means managing two inventories simultaneously — unless your jewelry store management software and your ecommerce platform are connected. EasyJewelry's Shopify integration links your jewelry inventory directly to your Shopify store, giving you control over which items are listed online, what price they show, and whether the stock shown on your website reflects what is actually available in your store. All of this is managed from within EasyJewelry, so your team never needs to log into Shopify to update individual product listings.
              </p>
              <p className="text-offWhite/80 leading-relaxed mt-4">
                The integration uses a status-based workflow that gives you precise control over every barcode-tagged item in your jewelry inventory and its relationship with your Shopify store. Each item can be in one of five states — To Be Added, Active, Invalid, Price Change, Price Check, or Sync Inventory — each representing a specific action or condition that determines what happens to that item in your Shopify store. This gives you a clean, organized pipeline for managing your online product catalog directly from your jewelry ERP software without any manual duplication of data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status workflow */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">The Shopify integration status workflow</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              Every barcode-tagged item in your jewelry inventory has a Shopify status that controls exactly what happens with that item in your online store.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  status: 'To Be Added',
                  desc: 'The item is in your jewelry inventory and has been flagged to be listed on your Shopify store. EasyJewelry will push this item to Shopify on the next sync, creating a new product listing with the item details, weight, karat, and price from your inventory record. This is how new stock gets from your physical store to your online store without any manual Shopify product creation.',
                },
                {
                  status: 'Active',
                  desc: 'The item is currently live on your Shopify store. It is available for purchase by online customers and its listing is in sync with the EasyJewelry record. When an item sells online, EasyJewelry is notified and the item status updates in your jewelry inventory management software to reflect that it is no longer available.',
                },
                {
                  status: 'Invalid',
                  desc: 'The item has been flagged as invalid for online listing — it may be missing required information, have an inconsistency between the EasyJewelry record and the Shopify listing, or have been manually marked as not suitable for online sale. Invalid items are not visible to online customers until the issue is resolved and the status is updated.',
                },
                {
                  status: 'Price Change',
                  desc: 'The price of this item has been updated in EasyJewelry and the change needs to be pushed to Shopify. Because jewelry prices are often linked to the current gold rate, prices can change frequently. The Price Change status ensures that any item whose price has been updated in your jewelry store software is flagged for a Shopify price update on the next sync.',
                },
                {
                  status: 'Price Check',
                  desc: 'The item requires a manual price review before its Shopify listing price is updated. This status is used when a price change has been detected but a human needs to confirm the new price is correct before it goes live on the online store. It is a quality control step to prevent incorrect prices from being published automatically.',
                },
                {
                  status: 'Sync Inventory',
                  desc: 'The item needs its inventory status synchronized between EasyJewelry and Shopify. This is used when the availability of an item in your physical store has changed and that change needs to be reflected on your Shopify storefront — for example, marking an item as out of stock online because it has been sold in store or transferred to another branch.',
                },
              ].map((item) => (
                <div
                  key={item.status}
                  className="bg-blue rounded-20 border border-lineColor/50 p-6"
                >
                  <div className="text-primary text-sm font-semibold mb-3">
                    {item.status}
                  </div>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">How the Shopify sync works in practice</Heading>
            <p className="text-offWhite/80 mt-4 mb-10">
              The integration is designed around the way jewelry retail actually works — individual high-value items that need careful control over their online presence rather than bulk product catalog management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'New stock enters your jewelry inventory',
                  desc: 'When a barcode-tagged piece is purchased through EasyJewelry and enters your jewelry inventory management software, you can flag it as To Be Added to queue it for your Shopify store. The item details — karat, description, gross weight, pure weight, and selling price — are already in EasyJewelry from the purchase record. No re-entry needed.',
                },
                {
                  step: '02',
                  title: 'Sync pushes items and updates to Shopify',
                  desc: 'EasyJewelry pushes the queued changes to your Shopify store — creating new listings for To Be Added items, updating prices for Price Change items, and syncing availability for Sync Inventory items. Your Shopify store reflects your physical jewelry inventory without any manual Shopify administration.',
                },
                {
                  step: '03',
                  title: 'Online sales update your inventory',
                  desc: 'When a customer purchases a piece through your Shopify store, EasyJewelry receives the order and marks that item as sold in your jewelry inventory system. The piece is no longer available for in-store sale and the inventory figures update across all branches. Your physical and online inventory are always in sync.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-blue rounded-20 border border-lineColor/50 p-6"
                >
                  <div className="text-primary text-sm font-semibold mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-offWhite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Heading as="h2">
                  Why Shopify integration matters for jewelry businesses
                </Heading>
                <div className="mt-6 space-y-5 text-offWhite/80 leading-relaxed">
                  <p>
                    Jewelry is one of the most challenging product categories to sell online precisely because every piece is unique. A ring with a barcode of 100012 is not the same as any other ring — it has a specific weight, a specific karat, a specific making charge, and a specific price. When that ring sells online, it needs to be marked as unavailable everywhere it is listed, and it needs to be removed from physical store inventory at the same time.
                  </p>
                  <p>
                    Without integration between your jewelry inventory management software and your Shopify store, this synchronization is manual. Staff check the website and update it separately from the physical store. Pieces show as available online after they have sold in store. Prices on the website do not reflect gold rate changes applied in the physical store. These discrepancies damage customer trust and create operational problems.
                  </p>
                  <p>
                    EasyJewelry's Shopify integration eliminates all of this. Your jewelry inventory system is the single source of truth. Prices, availability, and product information flow from EasyJewelry to Shopify, not the other way around. Your team manages inventory in one place and both channels stay accurate automatically.
                  </p>
                </div>
              </div>

              <div>
                <Heading as="h2">
                  Who benefits most
                </Heading>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      type: 'Jewelry Retailers with an Online Store',
                      desc: 'Manage your physical and online inventory from one system. New stock gets listed online automatically, sold pieces are removed instantly, and prices stay current without any manual Shopify updates.',
                    },
                    {
                      type: 'Gold and Diamond Jewelry Businesses',
                      desc: 'Keep your online jewelry catalog accurate without a dedicated ecommerce team. The status workflow gives you full control over which pieces are listed online and at what price before they go live.',
                    },
                    {
                      type: 'Multi-Branch Jewelry Stores',
                      desc: 'Manage your Shopify integration centrally from EasyJewelry regardless of which branch holds the stock. When a piece sells online, the inventory update happens at the correct branch automatically.',
                    },
                    {
                      type: 'Growing Jewelry Businesses',
                      desc: 'Add an online sales channel without adding operational complexity. Your existing jewelry store management software workflow stays the same — the Shopify integration runs in the background keeping your online store current.',
                    },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="bg-blue rounded-20 border border-lineColor/50 p-5"
                    >
                      <h3 className="text-sm font-semibold text-offWhite mb-1">
                        {item.type}
                      </h3>
                      <p className="text-sm text-paragraph leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">What is included</Heading>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Shopify store connection from EasyJewelry',
                'To Be Added status — queue items for listing',
                'Active status — live Shopify listings',
                'Invalid status — flag items not suitable for online',
                'Price Change status — push updated prices',
                'Price Check status — manual price review before publishing',
                'Sync Inventory status — update availability on Shopify',
                'Automatic product creation on Shopify from EasyJewelry',
                'Price sync from jewelry inventory to Shopify',
                'Availability sync when item sells in store',
                'Online sale marks item as sold in EasyJewelry',
                'Item detail from EasyJewelry pushed to Shopify listing',
                'Status management per barcode-tagged item',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-blue border border-lineColor/50 rounded-xl px-4 py-3"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#b8960c" fillOpacity="0.15" />
                    <path d="M4.5 8L6.5 10L11.5 5.5" stroke="#b8960c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-paragraph">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-bottom-border">
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">Common questions</Heading>
            <div className="mt-8 space-y-4">
              {[
                {
                  q: 'Do I need to create product listings manually in Shopify?',
                  a: 'No. When an item is set to To Be Added in EasyJewelry, the integration creates the Shopify product listing automatically using the item details already in your jewelry inventory management software. No manual Shopify product creation is required.',
                },
                {
                  q: 'What happens when a piece sells on Shopify?',
                  a: 'EasyJewelry receives the order notification from Shopify and marks the item as sold in your jewelry inventory system. The piece is removed from available stock in EasyJewelry and is no longer available for in-store sale.',
                },
                {
                  q: 'What happens when a piece sells in store that was listed on Shopify?',
                  a: 'The item status in EasyJewelry is updated to reflect the in-store sale. The Sync Inventory status can then be used to push the availability update to Shopify, marking the item as out of stock on your online store.',
                },
                {
                  q: 'Can I control which items are listed online and which are not?',
                  a: 'Yes. The status workflow gives you complete control. Only items explicitly set to To Be Added or Active will be listed on Shopify. Items can be marked as Invalid to prevent them from being listed regardless of their inventory status.',
                },
                {
                  q: 'Does the integration work with gold rate-based pricing?',
                  a: 'Yes. When prices are updated in EasyJewelry following a gold rate change, the affected items can be flagged with the Price Change status to push the updated prices to Shopify. The Price Check status gives you a manual review step before prices go live online.',
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-blue border border-lineColor/50 rounded-20 p-6"
                >
                  <h3 className="text-sm font-semibold text-offWhite mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outro + CTA */}
      <section>
        <div className="container">
          <div className="border-container section-spacing-lg">
            <Heading as="h2">
              One inventory, two channels, always in sync
            </Heading>
            <p className="text-offWhite/80 mt-4 leading-relaxed">
              The biggest operational challenge of running a jewelry store online and offline simultaneously is keeping two inventories in sync. EasyJewelry's Shopify integration solves this by making your jewelry inventory management software the single source of truth for both channels. What is in your store is what is on your website. Prices match. Availability is accurate. And your team manages it all from one system without ever needing to manually update your Shopify store.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-demo"
                className="button-primary inline-flex items-center justify-center px-[22px] py-3 text-white font-medium text-sm leading-normal rounded-[10px]"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/features"
                className="button-secondary inline-flex items-center justify-center px-[22px] py-3 font-medium text-sm leading-normal rounded-[10px]"
              >
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}