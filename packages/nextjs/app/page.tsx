"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { CodeBracketIcon, CubeTransparentIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 max-w-4xl">
          <h1 className="text-center">
            <span className="block text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blockscout Integration
            </span>
          </h1>

          <div className="flex justify-center items-center space-x-2 flex-col mb-8">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="text-center mb-8">
            <p className="text-xl leading-relaxed mb-6 text-base-content/80">
              We are leveraging the powerful <span className="font-semibold text-primary">Blockscout SDK</span> and
              <span className="font-semibold text-primary"> API</span> on Scaffold-ETH to extend and improve its
              functionality.
            </p>
          </div>
        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Blockscout Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Main Website Card */}
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <GlobeAltIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Official Website</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  Visit the main Blockscout website to learn more about their blockchain explorer solutions.
                </p>
                <a
                  href="https://www.blockscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Website
                </a>
              </div>

              {/* Documentation Card */}
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <DocumentTextIcon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Documentation</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  Comprehensive guides and API references for integrating Blockscout into your projects.
                </p>
                <a
                  href="https://docs.blockscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Read Docs
                </a>
              </div>

              {/* API Reference Card */}
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CodeBracketIcon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-3">API Reference</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  Detailed API documentation for developers building with Blockscout services.
                </p>
                <a
                  href="https://docs.blockscout.com/devs/apis/rest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-sm"
                >
                  API Docs
                </a>
              </div>

              {/* GitHub Card */}
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CubeTransparentIcon className="h-12 w-12 text-info mb-4" />
                <h3 className="text-lg font-semibold mb-3">Open Source</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  Explore the open-source codebase and contribute to the Blockscout ecosystem.
                </p>
                <a
                  href="https://github.com/blockscout/blockscout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info btn-sm"
                >
                  View GitHub
                </a>
              </div>
            </div>

            {/* Additional Integration Info */}
            <div className="mt-16 text-center">
              <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Enhanced with Scaffold-ETH</h3>
                <p className="text-lg text-base-content/80 max-w-3xl mx-auto">
                  This integration combines the robust development framework of Scaffold-ETH with Blockscout&apos;s
                  powerful blockchain exploration and analytics capabilities, providing developers with a comprehensive
                  toolkit for building and debugging dApps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
